import nativeFlower from "../../../../public/oregon-native-flower.jpg";
import Image from "next/image";
export default function Flowers() {
    return (
        <section>
            <figure>
                <Image src={nativeFlower} alt="Oregon Purple Native flower"height={200} width={200}/>
                <figcaption>Location</figcaption>
                <div>
                    <h2>Plant Name</h2>
                    <div>
                        <h3>Category</h3>
                        <h3>Sub-Category</h3>
                    </div>
                </div>
            </figure>
        </section>
    );
}
