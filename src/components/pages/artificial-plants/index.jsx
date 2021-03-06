import "./styles.css";

/* importing components to display on the artificial plant page */

import { Navbar } from '../../navbar/index';
import { ProductCard } from '../../card/index';
import { PageInfo } from '../../page-Info/index';
import { Footer } from '../../footer/index';
import { Filter } from '../../filter/index';
import { HeaderOne } from "../../headerOne";

import {Language, Crop54, Edit} from '@material-ui/icons'; /* Declaring props */

/* Making the ArtificialPlantPage component to contain all of our artificial plant page components. This component acts like a website page by displaying some of the
   other components made. We also pass props to our other components here. */

export const ArtificialPlantPage = () => {
    return (
        <>
            <div className="headerWrapper">
                <HeaderOne
                    Icon={<Language></Language>}
                    Message="We're experiencing supply issues"
                ></HeaderOne>
                <HeaderOne
                    Icon={<Crop54></Crop54>}
                    Message="Join IKEA family for free | get member-only discounts, benefits and more"
                ></HeaderOne>
                <HeaderOne
                    Icon={<Edit></Edit>}
                    Message="Personalized planning services"
                ></HeaderOne>
            </div>
            <Navbar></Navbar>
            <div>
                <PageInfo
                    pBreadCrumbs="Products > Home décor > Plants and flowers > Artificial plants and flowers"
                    pTitle="Artificial plants and flowers"
                    pSubtitle="Beautiful plants without the work"
                    pDescription="Lifelike and colourful, our artificial plants and flowers don't smell like the real thing, but they'll give your home a real boost. They never wilt and stay fresh-looking year after year. Why not keep a few stored away as well, so you can vary your display or brighten up a room anytime you feel like it?">
                </PageInfo>
                <Filter
                itemNumber="8 items">
                </Filter>
            </div>
            <div className="wrapper">
                <ProductCard
                    newProduct="hidden"
                    img="https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-bamboo__0900621_pe654125_s5.jpg?f=m" 
                    title="FEJKA"
                    description="Artificial potted plant, 9″ (23cm)"
                    price="$49.⁹⁹"
                    >  
                </ProductCard>
                <ProductCard
                    topSeller="none"
                    newProduct="hidden"
                    img="https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-hanging__0748531_pe745054_s5.jpg?f=xxs" 
                    title="FEJKA"
                    description="Artificial potted plant, 3 ½″ (9cm)"
                    price="$6.⁹⁹"
                    >  
                </ProductCard>
                <ProductCard
                    img="https://www.ikea.com/ca/en/images/products/smycka-artificial-leaf-eucalyptus-green__0902808_pe596760_s5.jpg?f=xxs" 
                    title="SMYCKA"
                    description="Artificial leaf, 25 ½″ (65cm)"
                    price="$6.⁹⁹"
                    >  
                </ProductCard>
                <ProductCard
                    topSeller="none"
                    newProduct="hidden"
                    img="https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-clusia__0959224_pe809437_s5.jpg?f=xxs" 
                    title="FEJKA"
                    description="Artificial potted plant, 4 ¾″ (12cm)"
                    price="$7.⁹⁹"
                    >  
                </ProductCard>
                <ProductCard
                    topSeller="none"
                    img="https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-with-pot-indoor-outdoor-succulent__0901062_pe687829_s5.jpg?f=xxs" 
                    title="FEJKA"
                    description="Artificial potted plants, 2 ¼″ 3 pack"
                    price="$3.⁹⁹"
                    >  
                </ProductCard>
                <ProductCard
                    newProduct="hidden"
                    img="https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-kentia-palm__0955452_pe804042_s5.jpg?f=xxs" 
                    title="FEJKA"
                    description="Artificial potted plant, 9″ (23 cm)"
                    price="$69.⁹⁹"
                    >  
                </ProductCard>
                <ProductCard
                    topSeller="none"
                    newProduct="hidden"
                    img="https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-magnolia__0965444_pe809428_s5.jpg?f=xxs" 
                    title="FEJKA"
                    description="Artificial potted plant, 9″ (23 cm)"
                    price="$69.⁹⁹"
                    >  
                </ProductCard>
                <ProductCard
                    topSeller="none"
                    img="https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-spiderwort__0959236_pe809447_s5.jpg?f=xxs" 
                    title="FEJKA"
                    description="Artificial potted plant, 3 ½″ (9 cm)"
                    price="$3.⁹⁹"
                    >  
                </ProductCard>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    );
}
