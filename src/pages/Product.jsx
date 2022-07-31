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
          <Image src="https://cdn.wccftech.com/wp-content/uploads/2021/07/iPhone-13-1480x1000.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>iPhone 13 Pro </Title>
          <h2 style={{color:"",backgroundColor:"#d7e3fc",padding:"5px 15px",maxWidth:"fit-content",borderRadius:"20px"}}>Trending Rank : 1</h2>
          <Desc>
            
          <hr style={{margin:"10px 0px"}}/>
          ● 6.1-inch (15.5 cm diagonal) Super Retina XDR display<br style={{margin:"5px"}}/>
          ● Ceramic Shield, tougher than any smartphone glass<br style={{margin:"5px"}}/>
          ● A14 Bionic chip, the fastest chip ever in a smartphone<br style={{margin:"5px"}}/>
          ● Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording<br style={{margin:"5px"}}/>
          ● 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording<br style={{margin:"5px"}}/>
          ● Industry-leading IP68 water resistance<br style={{margin:"5px"}}/>
          ● Supports MagSafe accessories for easy attach and faster wireless charging<br/>
          ● iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more<br/>

            <br/>
            Related Links : 
            <br/><a href="https://www.gsmarena.com/apple_iphone_13-pictures-11103.php" style={{color:"blue"}} target="_blank">https://www.gsmarena.com/apple_iphone_13-pictures-11103.php</a>
            <br/><a href="https://gadgets360.com/iphone-13-pro-price-in-india-104062" style={{color:"blue"}} target="_blank">https://gadgets360.com/iphone-13-pro-price-in-india-104062</a>
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
            </Filter><hr style={{margin:"0px 10px"}}/>
            <Filter>
              <FilterTitle>Capacity</FilterTitle>
              <FilterSize>
                <FilterSizeOption>64GB</FilterSizeOption>
                <FilterSizeOption>128GB</FilterSizeOption>
                {/* <FilterSizeOption>6GB</FilterSizeOption> */}
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
