import Image from "next/image";
import { Container } from "react-bootstrap";

export default function Collagen(){
    return(
        <Container>
        <Image src={"https://www.okkabeauty.com/wp-content/uploads/2023/12/RADIANT-GLOW.png"} width={1170} height={250} alt="promo-banner" className="mt-5 mb-5"/>
        </Container>
    )
}