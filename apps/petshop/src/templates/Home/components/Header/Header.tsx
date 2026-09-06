import { PetshopLogo, Title } from '@/components/commons';

export const Header = () => (
  <header>
    <div className="bg-background-tertiary px-5 py-3 w-38.25 rounded-br-xl flex gap-1.5 justify-center items-center">
      <PetshopLogo className="text-content-brand" />

      <Title className="text-sm" as="h1" variant="primary">
        Mundo pet
      </Title>
    </div>
  </header>
);
