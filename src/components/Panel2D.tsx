
import React, { useEffect, useState } from 'react';
import { Canvas, View, Layer, usePaperScope, Circle } from 'react-paper-bindings';
import { Grid } from './Grid';

type Panel2DProps = {
  // scope: paper.PaperScope
}

export const Panel2D = (props: Panel2DProps) => {
  const [isPaperScopeReady, setIsPaperScopeReady] = useState(false)

  const paperScope = usePaperScope()

  return (
    <Canvas width={500} height={500} scope={paperScope} onScopeReady={() => {
      setIsPaperScopeReady(true)
    }}>
      {isPaperScopeReady && <>
        <View>
          {/* background layer */}
          <Layer>
            <Grid />
          </Layer>
          {/* path layer */}
          <Layer>
            <Circle center={[0, 0]} radius={10} fillColor="red" />
          </Layer>
        </View>
      </>
      }
    </Canvas>
  );
}