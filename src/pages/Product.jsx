import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://www.futureworldindia.in/image/cache/catalog/FWI/IPhone/iphone%2012%20mini/iPhone%2012%20Mini%20Green-1500x1500.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>iPhone 12 in 2022 ? The best 😍 iPhone to buy right now? </Title>
          <Desc>
            Namaskaar Dosto, is video mein maine aapse baat ki hai iPhone 12 ke baare mein aur share ki hai iPhone 12 ki unboxing aur ek first look. Yaha is iPhone 12 mein hai Bionic 5G Octacore Processor aur yaha 5G bhi available hai aur saath mein hai 6GB/8GB/12GB RAM aur 128GB/256GB Storage. iPhone 12 mein hai 6.43"" ka FHD+ 90Hz Retina Display. iPhone 12 mein ek Triple rear Camera setup hai jaha hai 12MP Primary + 12MP Ultrawide+ 12MP Macro Camera. iPhone 12 mein 12MP ka Selfie camera hai aur saath mein 3500mAh ki battery hai 20W charging ke saath mein. iPhone 12 mein NFC bhi supported hai. Mujhe umeed hai ki aapko iPhone 12 ki yeh video pasand aayegi.  
          <hr style={{margin:"10px 0px"}}/>
            Share, Support, Subscribe!!!
            Subscribe: http://bit.ly/1Wfsvt4
            Android App: https://technicalguruji.in/app
            Youtube: http://www.youtube.com/c/TechnicalGuruji 
            Twitter:  http://www.twitter.com/technicalguruji
            Facebook: http://www.facebook.com/technicalguruji
            Facebook Myself: https://goo.gl/zUfbUU
            Instagram: http://instagram.com/technicalguruji
            Google Plus: https://plus.google.com/+TechnicalGuruji
            Website: https://technicalguruji.in/
            Merchandise: http://shop.technicalguruji.in/
            <br/>
            About : Technical Guruji is a YouTube Channel, where you will find technological videos in Hindi, New Video is Posted Everyday :)
          </Desc>
          <Price>₹1,20,000/-</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="lightgreen" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>RAM</FilterTitle>
              <FilterSize>
                <FilterSizeOption>2GB</FilterSizeOption>
                <FilterSizeOption>4GB</FilterSizeOption>
                <FilterSizeOption>6GB</FilterSizeOption>
                {/* <FilterSizeOption>L</FilterSizeOption> */}
                {/* <FilterSizeOption>XL</FilterSizeOption> */}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      {/* <Newsletter /> */}
      <Footer />
    </Container>
  );
};

export default Product;
