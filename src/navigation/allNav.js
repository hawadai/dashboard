import { FaShoppingCart } from "react-icons/fa";
import { FaUserTimes, FaUsers } from "react-icons/fa";
import { MdCategory,MdSpaceDashboard } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";
import { IoIosCard } from "react-icons/io";
import { IoChatbubbles } from "react-icons/io5";



export const allNav = [
    {
        id : 1,
        title : 'Dashboard',
        icon : <MdSpaceDashboard />,
        role : 'admin',
        path: '/admin/dashboard'
    },
    {
        id : 2,
        title : 'Orders',
        icon : <FaShoppingCart />,
        role : 'admin',
        path: '/admin/dashboard/orders'
    },
    {
        id : 3,
        title : 'Category',
        icon : <MdCategory  />,
        role : 'admin',
        path: '/admin/dashboard/category'
    },
    {
        id : 4,
        title : 'Sellers',
        icon : <FaUsers   />,
        role : 'admin',
        path: '/admin/dashboard/sellers'
    },
    {
        id : 5,
        title : 'Payment Request',
        icon : <IoIosCard />,
        role : 'admin',
        path: '/admin/dashboard/payment-request'
    },
    {
        id : 6,
        title : 'Deactive Sellers',
        icon : <FaUserTimes />,
        role : 'admin',
        path: '/admin/dashboard/deactive-sellers'
    },
    {
        id : 7,
        title : 'Seller Request',
        icon : <FaCodePullRequest />,
        role : 'admin',
        path: '/admin/dashboard/sellers-request'
    },
    {
        id : 8,
        title : 'Live Chat',
        icon : <IoChatbubbles />,
        role : 'admin',
        path: '/admin/dashboard/chat-sellers'
    }

]