import React from "react"
import Layout from "static/layout/layout";
import styled from "styled-components";
import {theme} from "static/layout/theme";
import Separator from "src/components/separator/separator";
import CardTwoParts from "src/components/cards/cardTwoParts";
import imageUrl from "static/images/puppies/puppy-theme.jpg";
import {HoverAnimationStyle} from "src/components/animation/animation";
import MetaData from "../components/meta-data/meta-data";

const DivTop = styled(HoverAnimationStyle)`
  flex: 1;
  display: flex;
`;

const BlockWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  ${theme.media.deviceSize.laptopL} {
    flex-direction: row;
    height: auto;
  }
`;

const Block = styled(HoverAnimationStyle)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  margin: 1rem;
  padding: 1rem;
  
  box-shadow: ${theme.effects.shadow};
  background-color: ${theme.colors.backgroundColor};
  ${theme.media.deviceSize.laptopL} {
    height:50vh;
  }
`;

const BlockTitle = styled.div`
  margin-bottom: -0.5rem;
  
  font-size: 2rem;
  text-shadow: ${theme.effects.shadow};
`;

const Text = styled.div` 
  flex:3;
  display: flex;
  justify-content: center;
 
  ${theme.media.deviceSize.laptop} {
    font-size: 0.8rem;
  }
`;

const Wrapper = styled.div` 
  flex:1;
  display: flex;
  flex-direction: column;
  ${theme.media.deviceSize.laptop} {
    flex-direction: row;
  }
`;

const PuppiesPage = () => {
    return (
        <div>
            <Layout>
                <MetaData
                    title={"Showfarm | Szczeniaki i miot"}
                    description={"Na tej stronie znajdziesz informacje o szczeniakach i motach w naszej hodowli"}/>
                <DivTop showDelay={0.1}>
                    <CardTwoParts
                        title={'MIOT'}
                        subTitle={'Najbliższy miot będzie na przełomie zima/wiosna 2021! Jeśli jesteś zainteresowany szczeniakiem z naszej hodowli - zadzwoń lub napisz.'}
                        imgUrl={imageUrl}/>
                </DivTop>
                <BlockWrapper>
                    <Wrapper>
                        <Block showDelay={0.2}>
                            <BlockTitle>Dom</BlockTitle>
                            <Separator color={theme.colors.detailColor}/>
                            <Text>Dla naszych szczeniaków poszukujemy domów w szczególności świadomych rasy oraz tego że aussiki to psy aktywne i potrzebujące bliskiego kontaktu ze swoim opiekunem. Zależy nam na tym aby każdy pies z naszej hodowli był traktowany jak członek rodziny aby był obdarzony miłością! Bardzo cieszymy się z domów aktywnych i chcących pracować z psem!`</Text>
                        </Block>
                        <Block showDelay={0.4}>
                            <BlockTitle>Wybór psa</BlockTitle>
                            <Separator color={theme.colors.detailColor}/>
                            <Text>W naszej hodowli mamy zasadę oceniania charakterów szczeniąt i pod tym kątem dobierania ich do nowych właścicieli, ich możliwości i potrzeb. Jeśli jesteś zainteresowany szczeniakiem z naszej hodowli bardzo ważne abyś podał nam opis: dlaczego interesuje Cię ta rasa, jakie masz się warunki, czego się oczekujesz od psa, co się chcesz z psem  robić. Wszystkie podane informacje pozwolą nam wśród szczeniąt wybrać tego jedynego, który charakterem będzie pasował do Twojego trybu życia i dzięki temu stworzysz ze swoim psem naprawdę dobry team!  </Text>
                        </Block>
                    </Wrapper>
                    <Wrapper>
                        <Block showDelay={0.6}>
                            <BlockTitle>Szczeniaki</BlockTitle>
                            <Separator color={theme.colors.detailColor}/>
                            <Text>W naszej hodowli kładziemy bardzo mocny nacisk na socjalizację szczeniąt, dlatego już od pierwszych dni poddajemy szczeniaki wczesnej stymulacji neurologicznej. Gdy podrosną przyzwyczajamy szczeniaki do nowych miejsc, jazdy autem, do innych zwierząt, do odgłosów codziennego życia gdyż im więcej szczeniak pozna za młodu tym łatwiej będzie radził sobie ze stresem w przyszłości.</Text>
                        </Block>
                        <Block showDelay={0.8}>
                            <BlockTitle>Rodzice</BlockTitle>
                            <Separator color={theme.colors.detailColor}/>
                            <Text>Bardzo poważne podchodzimy do naszych planów hodowlanych ponieważ najważniejsze dla nas jest zdrowie i charakter u owczarka. Zawsze staramy się dobierać psy tak aby pod każdym względem do siebie pasowały albo się uzupełniały. Zależy nam aby aussiki z naszej hodowli były psami umiarkowanymi o pożądanych dla rasy cechach oraz stabilnymi charakterami stąd wybór rodziców musi być zawsze przemyślany! Zawsze analizujemy rodowody psów pod kątem zdrowia. </Text>
                        </Block>
                    </Wrapper>
                </BlockWrapper>
            </Layout>
        </div>
    )
};

export default PuppiesPage
