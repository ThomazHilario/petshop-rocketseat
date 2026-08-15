import { Main, Title, Text } from '@/components/commons';
import { Header } from '../components';

export const HomePage = () => (
  <div className="bg-background-primary min-h-screen">
    <Header />

    <Main className="max-w-217.75 m-auto space-y-5">
      <div className="space-y-3 md:space-y-1 md:flex md:justify-between md:items-center">
        <section>
          <Title as="h1">Sua agenda</Title>

          <Text className="text-justify" variant="secondary" size="md">
            Aqui você pode ver todos os clientes e serviços agendados para hoje.
          </Text>
        </section>
        <div>
          <input className="border border-blue-500 rounded-lg" type="date" />
        </div>
      </div>

      <section arial-label="Seção de agendamentos">appointments</section>
    </Main>
  </div>
);
