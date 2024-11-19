 
import { createThirdwebClient, defineChain } from "thirdweb";
 

const clientID = process.env.NEXT_PUBLIC_CLIENT_ID;

if(!clientID){
     throw new Error("Client not found")
}

export const client = createThirdwebClient({
    clientId : clientID,
});

export const chain = defineChain(421614)