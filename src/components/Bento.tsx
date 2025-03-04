import { Experience } from './Experience';
import { FlipWords } from './FlipWords';
import { ProgrammingFlagIcon } from './Icons';
import { Technologies } from './Technologies';
export const Bento = () => {
	const words = ['FullStack', 'Springboot', 'React', 'Mysql'];
	return (
		<div className="lg:grid lg:grid-cols-3 lg:grid-rows-2 flex flex-col gap-3">
			<Experience />
			<div className="relative text-2xl lg:text-4xl flex flex-col gap-20 items-center justify-center row-span-1 bg-[#1D1C20] rounded-lg p-6 lg:p-12 col-span-1 font-normal text-neutral-400">
				<FlipWords words={words} />
				<ProgrammingFlagIcon className="hidden lg:flex lg:absolute top-1/3 right-1/3" width={50} />
			</div>
			<div className="text-lg bg-[#1D1C20] rounded-lg p-6 lg:p-12 col-span-1 font-normal text-neutral-400">
				<h2 className="text-2xl lg:text-4xl pb-4 font-bold text-neutral-100">About Me</h2>
				<ul className="flex flex-col gap-2">
					<li>🎓 Software Engineering</li>
					<li>🌍 Native language: Spanish</li>
					<li>🇬🇧 English: Level B2</li>
					<li>💻 Passionate about web development</li>
					<li>🎵 Music enthusiast, R&B genre</li>
					<li>🔧 Enjoys customizing Linuxx</li>
				</ul>
			</div>
			<Technologies />
		</div>
	);
};
