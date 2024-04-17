import { cn } from "@/lib/utils";

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main
			className={
				"min-h-screen grid content-center bg-background font-sans antialiased"
			}
		>
			{children}
		</main>
	);
}
