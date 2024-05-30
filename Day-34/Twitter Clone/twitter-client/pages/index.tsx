import React, {useCallback} from "react";
import Image from "next/image";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHomeCircle, BiMoney, BiUser,BiHash } from "react-icons/bi";
import {GoogleLogin,CredentialResponse} from '@react-oauth/google'
import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";
import { toast } from "react-hot-toast";
import { graphql } from "@/gql";
import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";
import { useCurrentUser } from "@/hooks/user";
import { useQueries, useQueryClient } from "@tanstack/react-query";

interface TwitterSideBarButton {
  title: string;
  icon: React.ReactNode;
}

const sideBarMenuItems: TwitterSideBarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More Options",
    icon: <SlOptions />,
  },
];

export default function Home() {

  const {user} = useCurrentUser()
  const queryClient = useQueryClient()

  const handleLoginWithGoogle = useCallback(async (cred : CredentialResponse) => {
     const googleToken = cred.credential 
     if(!googleToken) return toast.error(`Google token not found`)
      const {verifyGoogleToken} = await graphqlClient.request(verifyUserGoogleTokenQuery,{token : googleToken});

     toast.success('Verified Success');
     console.log(verifyGoogleToken)

     if(verifyGoogleToken) window.localStorage.setItem('token',verifyGoogleToken)

      await queryClient.invalidateQueries(["current-user"]);
  },[queryClient])
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1 ml-08">
          <div className="text-2xl h-fit w-fit hover:bg-gray-800 rounded-full py-2 px-4 cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-2 text- xl pr-4">
            <ul>
              {sideBarMenuItems.map((item) => (
                <li
                  className="flex justify-start item-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer mt-2"
                  key={item.title}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span className="pt-1">{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
              <button className="bg-[#1d9bf0] text-lg font-semibold p-4 rounded-full w-full">
                Tweet
              </button>
            </div>
          </div>
          <div>
           {user && user.profileImageURL && <Image src={user?.profileImageURL} alt="user-image" height={50} width={50}/>}
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3">
          {!user && <div className="p-5 bg-slate-700 rounded-lg">
            <h1 className="my-2 text-2xl">New to Twitter?</h1>
            <GoogleLogin onSuccess={handleLoginWithGoogle} />
          </div>}
        </div>
      </div>
    </div>
  );
}
