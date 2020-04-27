import React from "react"
import Layout from "static/layout/layout";
import styled from "styled-components";
import {theme} from "../../static/layout/theme";
import Separator from "../components/separator/separator";

const BlockWrapper = styled.div`
  flex: 1;
  display: flex;
  margin-top: 20vh;
  padding: 1rem;
`;

const Block = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:40vh;
  margin: 1rem;
  padding: 1rem;
  
  box-shadow: ${theme.effects.shadow};
  background-color: ${theme.colors.lightGray};
  ${theme.effects.animation.entranceLeft};
`;

const BlockTitle = styled.div`
  font-size: 2rem;
  color: ${theme.colors.darkGray};
  text-shadow: ${theme.effects.shadow};
`;

const Text = styled.text` 
font-size: 0.8rem;
  flex:3;
  display: flex;
  justify-content: center;
  
  color: ${theme.colors.darkGray};
`;
const PuppiesPage = () => {
    return (
        <div>
            <Layout>
                <BlockWrapper>
                    <Block>
                        <BlockTitle>Dom</BlockTitle>
                        <Separator color={theme.colors.darkGold}/>
                        <Text>Szczególności świadomych rasy, że aussiki to psy aktywne i potrzebujące bliskiego kontaktu
                            ze swoim opiekunem. Zależy nam, że każdy pies z naszej hodowli był traktowany jak członek
                            rodziny aby był obdarzony miłością! Bardzo cieszymy się z domów aktywnych i chcących
                            pracować z psem!</Text>
                    </Block>
                    <Block>
                        <BlockTitle>Wybór psa</BlockTitle>
                        <Separator color={theme.colors.darkGold}/>
                        <Text>W naszej hodowli mamy zasadę oceniania charakterów szczeniąt i pod tym kątem dobierania
                            ich do nowych właścicieli i ich potrzeb. Jeśli jesteś zainteresowany szczeniakiem z naszej
                            hodowli bardzo ważne abyś podał nam opis : dlaczego ta rasa, jakie ma się warunki, czego się
                            oczekuje od psa, co się chce z psem robić. Wszystkie podane informacje pozwolą nam wśród
                            szczeniąt wybrać tego jedynego, który charakterem będzie pasował do Twojego trybu życia i
                            dzięki temu stworzysz ze swoim psem na prawdę dobry team!</Text>
                    </Block> <Block>
                    <BlockTitle>Szczeniaki</BlockTitle>
                    <Separator color={theme.colors.darkGold}/>
                    <Text>W naszej hodowli kładziemy bardzo mocny nacisk na socjalizację szczeniąt dlatego już od
                        pierwszych dni podajemy szczeniaki wczesnej stymulacji neurologicznej. Gdy podrosną
                        przyzwyczajamy szczeniaki do nowych miejsc, jazdy autem, do innych zwierząt, do odgłosów
                        codziennego życia gdyż im więcej szczeniak pozna za młodu tym łatwiej będzie radził sobie ze
                        stresem w przyszłości.</Text>
                </Block>
                    <Block>
                        <BlockTitle>Rodzice</BlockTitle>
                        <Separator color={theme.colors.darkGold}/>
                        <Text>Bardzo poważne podchodzimy do naszych planów hodowlanych ponieważ najważniejsze dla nas
                            jest zdrowie i charakter u owczarka. Zawsze staramy się dobierać psy tak aby pod każdym
                            względem do siebie pasowały albo się uzupełniały. Zależy nam aby aussiki z naszej hodowli
                            były psami umiarkowanymi o pożądanych dla rasy cechach oraz stabilnymi charakternikami stąd
                            wybór rodziców musi być zawsze przemyślany!</Text>
                    </Block>
                </BlockWrapper>

            </Layout>
        </div>
    )
};

export default PuppiesPage
