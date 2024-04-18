import { Client } from 'pg';

export async function getClient() {
    const client = new Client(
      "postgres://brnhcutp:fLUT3fW6-nByy58jDhj1RDJIzxqwzNUQ@arjuna.db.elephantsql.com/brnhcutp"
    );
    await client.connect();
    return client;
}