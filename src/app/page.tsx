import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-6">
			<div className="max-w-2xl text-center flex flex-col items-center gap-8">
				<Image
					src="/logo.svg"
					alt="NateIT Logo"
					width={180}
					height={180}
					priority
					className="w-40 h-auto"
				/>

				<div className="space-y-4">
					<h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-black dark:text-white">
						NateIT
					</h1>

					<p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
						Our website is currently undergoing some extended maintenance.
					</p>

					<p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
						While you wait, feel free to contact us about our services at:
					</p>

					<a
						href="mailto:nate@wombwell.email"
						className="text-lg font-medium text-blue-600 hover:underline dark:text-blue-400"
					>
						nate@wombwell.email
					</a>
				</div>
			</div>
		</div>
	);
}
