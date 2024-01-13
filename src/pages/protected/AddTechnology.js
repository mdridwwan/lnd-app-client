
import TechnologyModal from '../../features/technology/TechnologyModal';
import TechnologyTable from '../../features/technology/TechnologyTable';

const AddTechnology = () => {

    return (
        <div>
            <div>
                <h2 className='text-3xl	text-center font-semibold mb-4'>Technology</h2>
            </div>
            <div>
                <TechnologyModal></TechnologyModal>
            </div>
            <div>
                <TechnologyTable></TechnologyTable>
            </div>
        </div>
    );
};

export default AddTechnology;