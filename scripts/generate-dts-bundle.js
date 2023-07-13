import { createBundle } from 'dts-buddy';

await createBundle({
  project: 'tsconfig.json',
  output: 'types/index.d.ts',
  modules: {
    'dts-buddy-repro': 'src/index.js',
  },
});
