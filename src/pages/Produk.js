import react from 'react';
import { useNavigate } from 'react-router-dom';
function Produk(){
    const navigate = useNavigate();
    function gotTambahData(){
            navigate('/produk/add');
    }
    return(
        <div>
            <button onClick={gotTambahData}>Tambah data</button>
            <h1>selamat datang di workshop pemograman framework</h1>
        </div>
    );
}
export default Produk;