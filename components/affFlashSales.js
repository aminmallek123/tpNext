"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import AppBanner from 'smart-app-banner-react'
import DateCountdown from 'react-date-countdown-timer';
export default function FlashSalesPage() {
    var d = new Date();
    const [compt, setCompt] = useState(d.setSeconds(d.getSeconds() + 4500));
    const { entities, loading } = useSelector((state) => state.product);
    const finalTimer = () => {

    }

    const appInfo = {
        imageUrl:
            "/images/flash.jfif",
        name: "Flash Sales",
        publisher: "ends in",
        infoText: <DateCountdown dateTo={compt} callback={() => finalTimer()} />,
        linkButtonText: "VIEW",
        linkUrl:
            "#"
    };
    return (
            <>
            <AppBanner
                appInfo={appInfo}
                position="bottom"
                onClose={() => {
                    console.log("onClose called");
                }}
                hidden={false}
                style={{
                    zIndex: 10,
                }} />
        <div className="row row-cols-8">
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    entities?.map((prod) => (
                        <div className="col" key={prod.id}>
                            <div className="card">
                                <img src={prod.images[0]} className="card-img-top"
                                    alt={prod.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{prod.title}</h5>
                                    <p className="card-text">
                                        <s>{prod.price}$</s>
                                    </p>
                                    <p className="card-text">
                                        {prod.price - prod.price * 0.1}$
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                    )
                )}
            </div>
            </>);
} 
