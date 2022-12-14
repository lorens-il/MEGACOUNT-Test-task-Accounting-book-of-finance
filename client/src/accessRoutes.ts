import { Routes } from "./types/types";
import Auth from "./components/pages/auth/Auth"; 
import Lists from "./components/pages/lists/Lists";
import Wallet from "./components/pages/wallet/Wallet";

const publicRoutes: Routes[] = [
    {
       path:'/',
       Component: Auth
    },
    {
        path:'/registration',
        Component: Auth
    }
];

const userRoutes: Routes[] = [
    {
       path:'/wallets',
       Component: Lists
    },
    {
        path:'/wallets/:id',
        Component: Wallet
    },
    {
        path:'/revenues',
        Component: Lists
    },

    {
        path:'/expenses',
        Component: Lists
    },

];

export {publicRoutes, userRoutes};