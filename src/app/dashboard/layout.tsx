import { AuthProvider } from '@/components/AuthProvider';

export default function DashboardLayout({ children }: { children: React.ReactNode }): JSX.Element {
	return <AuthProvider>{children}</AuthProvider>;
}
