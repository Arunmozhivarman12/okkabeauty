'use client'
import Image from "next/image";
import { Container, Carousel } from "react-bootstrap";



export default function HomeBanner() {
    return (
        <>
            <Carousel indicators={true}>
                <Carousel.Item>
                    <Image src="https://www.okkabeauty.com/wp-content/uploads/2023/04/2-5.jpg" className="banner" alt="banner1" width={1920} height={700} />

                </Carousel.Item>
                <Carousel.Item>
                    <Image src="https://www.okkabeauty.com/wp-content/uploads/2024/03/RAMADAN-SALE.jpg"
                    className="banner"    alt="banner2" width={1920} height={700} />

                </Carousel.Item>

            </Carousel>
        </>
    )
}