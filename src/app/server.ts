import { PORT } from '../config';
import { app } from './app';

app.listen(PORT || 3003, () => {
  console.log('Server running on port 3003');
});
