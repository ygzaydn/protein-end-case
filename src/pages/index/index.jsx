import React from "react";
import { Header, CategoryText, ItemCard } from "../../components";
import { BannerImage, Example } from "../../assets/images/";

const Index = () => {
    return (
        <section className="indexpage">
            <div className="indexpage__header">
                <Header />
            </div>

            <div className="indexpage__content">
                <div className="indexpage__bannerdiv">
                    <img
                        src={BannerImage}
                        alt="indexpage-banner-image"
                        className="indexpage__bannerdiv__image"
                    />
                </div>
                <div className="indexpage__categorydiv">
                    <CategoryText active name="Hepsi" />
                    <CategoryText name="Hepsi2" />
                    <CategoryText name="Hepsi3" />
                    <CategoryText name="Hepsi4" />
                    <CategoryText name="Hepsi5" />
                    <CategoryText name="Hepsi6" />
                    <CategoryText name="Hepsi7" />
                    <CategoryText name="Hepsi8" />
                </div>
                <div className="indexpage__itemdiv">
                    <ItemCard
                        imageURL={Example}
                        color="Mavi"
                        brand="Mavi"
                        price="1990"
                    />
                    <ItemCard
                        imageURL={Example}
                        color="Mavi"
                        brand="Mavi"
                        price="1990"
                    />
                    <ItemCard
                        imageURL={Example}
                        color="Mavi"
                        brand="Mavi"
                        price="1990"
                    />
                    <ItemCard
                        imageURL={Example}
                        color="Mavi"
                        brand="Mavi"
                        price="1990"
                    />
                    <ItemCard
                        imageURL={Example}
                        color="Mavi"
                        brand="Mavi"
                        price="1990"
                    />
                    <ItemCard
                        imageURL={Example}
                        color="Mavi"
                        brand="Mavi"
                        price="1990"
                    />
                    <ItemCard
                        imageURL={Example}
                        color="Mavi"
                        brand="Mavi"
                        price="1990"
                    />
                    <ItemCard
                        imageURL={Example}
                        color="Mavi"
                        brand="Mavi"
                        price="1990"
                    />
                    <ItemCard
                        imageURL={Example}
                        color="Mavi"
                        brand="Mavi"
                        price="1990"
                    />
                    <ItemCard
                        imageURL={Example}
                        color="Mavi"
                        brand="Mavi"
                        price="1990"
                    />
                    <ItemCard
                        imageURL={Example}
                        color="Mavi"
                        brand="Mavi"
                        price="1990"
                    />
                    <ItemCard
                        imageURL={Example}
                        color="Mavi"
                        brand="Mavi"
                        price="1990"
                    />
                    <ItemCard
                        imageURL={Example}
                        color="Mavi"
                        brand="Mavi"
                        price="1990"
                    />
                    <ItemCard
                        imageURL={Example}
                        color="Mavi"
                        brand="Mavi"
                        price="1990"
                    />
                </div>
            </div>
        </section>
    );
};

export default Index;
