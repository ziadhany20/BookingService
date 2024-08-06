// pages/details/[id].tsx
import { useRouter } from 'next/router';
import Content from '../../Components/Content';
import DarkForm from '@/Components/DarkForm';
import './[id].css'


const PackageDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id || typeof id !== 'string') {
    return ;
  }

  return (
    <div className='page2-container'>
      
      <Content id={id} />
      
     
    </div>
  );
};

export default PackageDetail;
