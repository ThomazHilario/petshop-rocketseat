import { Main } from '@/components/commons';
import { Header } from '../components';

export const HomePage = () => (
  <div className="bg-background-primary min-h-screen">
    <Header />

    <Main className="max-w-217.75 m-auto">
      <p className="text-paragraph-small">Aqui eo nosso conteudo principal</p>
    </Main>
  </div>
);
