import Link from "next/link";

import { wishlistType } from "@/types";
import type { GetServerSidePropsContext } from 'next';


export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { cookie } = context.req.headers;
    let data;
    if (cookie) {
        const res = await fetch("http://localhost:8080/user-lists", {
            headers: {
                Cookie: cookie
            }
        });
        data = await res.json();
    } else {
        data = {};
    }
    return {

        props: { data }, // Pass the data as props to the component

    };

}

export default function Page({data}) { //TODO type props
    const lists = data.lists;

    return (
        <div>
            <h1>Your lists</h1>

            <Link href={"/create-list"}>Create list</Link>

            {lists && lists.length !== 0 ? lists.map((element, i) => {
                console.log(element);
                return (
                    <div key={i}>
                        <Link href={"/list/" + element.wishlistId._id}>{element.wishlistId.name}</Link>
                    </div>
                );
            }) : <p>No lists</p>}

        </div>
    );
}