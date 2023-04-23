import icon from '../../Icons/loading.gif';

export const Spinner = () => {
  return (
    <div className='d-flex justify-content-center'>
      <img src={icon} alt="spinner.gif" style={{height: "70%"}}></img>
    </div>
  );
}
