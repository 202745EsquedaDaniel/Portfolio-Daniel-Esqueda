import OnlineShop from '../assets/Online-shop.png';
import AAmmcoTires from '../assets/AmmcoTires.png';
import { PinContainer } from './3dPin';
import { GitMergeIcon, NextJsIcon, ReactIcon, TailwindIcon } from './Icons';

export const Projects = () => {
	return (
		<div className="text-lg bg-[#1D1C20] flex flex-col gap-8 rounded-lg p-6 pb-12 lg:p-12 col-span-3 font-normal text-neutral-400 lg:pb-24">
			<h2 className="text-2xl lg:text-4xl pb-4 font-bold text-neutral-100">Projects</h2>
			<section className="flex w-full flex-col md:flex-row gap-20 md:gap-8">
				<PinContainer title="Online-Shop/" href="https://online-shop-react-and-vite.vercel.app/">
					<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[14rem] lg:h-[20rem] lg:w-[20rem]">
						<h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">Online Shop</h3>
						<span className="text-neutral-500 ">A website where you can buy stuff</span>
						<div className="rounded-lg overflow-hidden mt-4">
							<img src={OnlineShop} alt="Linux Learner" className="w-full h-full" />
						</div>
						<footer className="flex gap-2">
							<NextJsIcon width={20} />
							<TailwindIcon width={20} />
							<ReactIcon width={20} />
							<GitMergeIcon width={20} />
						</footer>
					</div>
				</PinContainer>
				<PinContainer title="Ammco.llantas/" href="https://ammcollantas-production.up.railway.app/">
					<div
						className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2
           w-[14rem] lg:h-[20rem] lg:w-[20rem]">
						<h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
							AMM.CO Llantas
						</h3>
						<span className="text-neutral-500 ">
							A FullStack page where you can sell tires and manage inventory
						</span>
						<div className="rounded-lg overflow-hidden mt-4">
							<img src={AAmmcoTires} alt="Linux Learner" className="w-full h-full" />
						</div>
						<footer className="flex gap-2">
							<NextJsIcon width={20} />
							<TailwindIcon width={20} />
							<ReactIcon width={20} />
							<GitMergeIcon width={20} />
						</footer>
					</div>
				</PinContainer>
			</section>
		</div>
	);
};
