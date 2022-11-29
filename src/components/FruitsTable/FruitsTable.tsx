import { useFruits } from '../../hooks';
import * as S from './FruitsTable.styled';

interface IFruit {
  id: number;
  name: string;
  color: string;
}

const FruitsTable = () => {
  const { fruits } = useFruits();
  return (
    <S.FruitsTable>
      <thead>
        <tr>
          <th>Name</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        {fruits.map((fruit: IFruit, i) => (
          <tr key={i}>
            <td>{`${fruit.name}`}</td>
            <td>{`${fruit.color}`}</td>
          </tr>
        ))}
      </tbody>
    </S.FruitsTable>
  );
};

export default FruitsTable;
