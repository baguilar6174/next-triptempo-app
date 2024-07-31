import { AuthProvider } from '@/components/AuthProvider';
import { DashboardNavbar as Navbar } from './components/Navbar';

export default function DashboardLayout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<AuthProvider>
			<div className="flex w-full h-full">
				<div className="hidden xl:block w-80 h-full xl:fixed">Sidebar</div>
				<div className="w-full xl:ml-80">
					<Navbar />
					<div className="p-6 bg-[#fafbfc] dark:bg-secondary">{children}</div>
				</div>
			</div>
		</AuthProvider>
	);
}
