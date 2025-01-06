"use client";

import { wishlistType } from "@/types";
import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { cookie } = context.req.headers;
    let data;
    if (cookie && context.params) {
        const res = await fetch("http://localhost:8080/list/" + context.params.id, {
            headers: {
                Cookie: cookie
            }
        });
        if (res.ok) {
            data = await res.json();
        } else {
            data = {};
        }
    } else {
        data = {};
    }
    if (context.params) { 
        data = {...data, id: context.params.id};
    } else {
        data = {...data, id: "error"};
    }
    return {
        props: { data }, // Pass the data as props to the component
    };

}


export default function Page({ data }) {
    const wishlist = data.wishlist;
    console.log(wishlist);

    return (
        <div>
            <h1>{wishlist ? wishlist.name : "list page " + data.id}</h1>

            {wishlist ? (
                <ul>
                    {wishlist.items.map((element, i) => {
                        return (
                            <li key={i}>
                                <p>{element.name}</p>
                                <a href={element.url}>{element.url}</a>
                                <p>{element.claimedByUserId}</p>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>no List</p>
            )}
        </div>
    );
}
