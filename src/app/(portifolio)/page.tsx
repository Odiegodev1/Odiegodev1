
import { CardEdudacacao } from "./_components/CardEducacao";
import { CardExperiencias } from "./_components/cardExperiencias";
import { Cardinfo } from "./_components/cardinfo";
import { CardProfile } from "./_components/cardporfile";
import { CardPost } from "./_components/Cardpost";
import { CardProjeto } from "./_components/cardProjetos";
import { CardRecente } from "./_components/cardRecente";
import { CardTecnologias } from "./_components/cardTecnologia";
import { CardMeuProjeto } from "./_components/carmeuprojeto";

export default function Portifolio() {
    return (
        <section>
        <main className="flex md:p-7 p-4  gap-10">
        <div className="space-y-4 items-center justify-center flex flex-col">
            <CardProfile />
            <Cardinfo />
            <CardTecnologias />
            <CardExperiencias />
            <CardEdudacacao />
        </div>
        <div className="flex-1  space-y-4">
             <CardMeuProjeto />
         <div className=" gap-5  flex">
             <CardProjeto />
         </div>
         <CardRecente />
         <div className="flex flex-col space-y-4">
          <CardPost />
         </div>
        </div>
         
        </main>
        <footer className="text-center  text-zinc-500 mb-2"><h1>Feito com 🤍 por Diego santos</h1></footer>
        </section>
       
    );
}