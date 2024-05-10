import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signupInput,signinInput } from "@100xdevs/medium-common";


export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>(); 

userRouter.post("/signup", async (c) => {
  const body = await c.req.json();
  const {success} = signupInput.safeParse(body);
   if(!success){
    c.status(411);
    return c.json({
        msg : "Inputs not correct"
    })
   }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        username: body.username,
      },
    });

    const jwt = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET
    );
    return c.json({
      token: jwt,
    });
  } catch (e) {
    console.log(e);
    c.status(411);
    return c.json("User already exits with this email");
  }
});

userRouter.post("/signin", async (c) => {
  const body = await c.req.json();
   const { success } = signinInput.safeParse(body);
   if (!success) {
     c.status(411);
     return c.json({
       msg: "Inputs not correct",
     });
   }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password,
        username: body.username,
      },
    });

    if (!user) {
      c.status(403);
      return c.json({
        message: "Incorrect credentials",
      });
    }

    const jwt = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET
    );
    return c.json({
      token: jwt,
    });
  } catch (e) {
    console.log(e);
    c.status(411);
    return c.text("User already exits with this email");
  }
});