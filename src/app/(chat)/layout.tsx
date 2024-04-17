import { cn } from "@/lib/utils";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main
			className={cn(
				"min-h-screen w-full bg-background font-sans antialiased"
			)}
		>
			{children}
		</main>
	);
}
