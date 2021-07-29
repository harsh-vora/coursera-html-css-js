import dynamic from 'next/dynamic';

import Box from 'components/base/Box';

const ModelViewer = dynamic(
  () => import('components/model-media/ModelViewer'),
  {
    ssr: false,
  }
);

interface ModelProps {
  src: string;
  className?: string;
  toBlob?: (posterBlob: Blob) => void;
}

export default function Model(props: ModelProps): JSX.Element {
  const { src, className, toBlob } = props;

  return (
    <Box className={className}>
      <ModelViewer src={src} toBlob={toBlob} />
    </Box>
  );
}
