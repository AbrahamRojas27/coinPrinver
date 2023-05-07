  import { StakingHomeCard } from "../components/staking/StakingHomeCard";
  
  const StakingHome = () => {
    return (
      <section className='grid w-full mx-auto grid-flow-col overflow-scroll overscroll-contain gap-4 p-4'>
          <StakingHomeCard/>
      </section>
    );
  }


export { StakingHome }