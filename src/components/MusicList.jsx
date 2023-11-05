import { Button } from 'react-bootstrap';
import { musicList } from '../constents';

function MusicList() {
  return (
    <>
      {musicList.map((music) => (
        <div
          key={music.id}
          className='d-flex gap-2 flex-row justify-content-between align-items-center w-100 border-bottom border-dark pb-2 px-2'
        >
          <p className='mb-0' style={{ width: '10%' }}>
            {music.date}
          </p>
          <p className='mb-0 w-25'>{music.city}</p>
          <p className='mb-0' style={{ width: '40%' }}>
            {music.venue}
          </p>
          <Button
            variant='info'
            size='sm'
            className='text-white px-lg-5 px-sm-4 fw-semibold'
          >
            BUY TICKETS
          </Button>
        </div>
      ))}
    </>
  );
}

export default MusicList;
