import { CitiesService } from '@/services/cities.service';
import { DataTable } from './DataTable';
import { columns } from './Columns';

export const List = async (): Promise<JSX.Element> => {
	const { result } = await CitiesService.getCitites();
	return <DataTable columns={columns} data={result.data} />;
};
