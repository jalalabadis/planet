import tenantConfig from '../../../../../tenant.config';
import PlayButton from '../../../common/LandingVideo/PlayButton';
import { useProjectProps } from '../../../common/Layout/ProjectPropsContext';
import { SetState } from '../../../common/types/common';
import MapLayout from '../ProjectsMap';

interface Props {
  setshowVideo: SetState<boolean>;
}

const MapHolder = ({ setshowVideo }: Props) => {
  const { project, projects } = useProjectProps();
  const config = tenantConfig();

  return (
    <>
      {project !== null || projects !== null ? <MapLayout /> : null}
      <div
        style={
          config.tenantName === 'planet' || config.tenantName === 'ttc'
            ? {}
            : { display: 'none' }
        }
      >
        <PlayButton setshowVideo={setshowVideo} />
      </div>
    </>
  );
};
export default MapHolder;
