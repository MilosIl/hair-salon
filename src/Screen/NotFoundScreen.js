import { Redirect } from 'react';
function NotFoundScreen() {
  return (
    <div>
      <p sx={{ fontSize: '2rem', fontWeight: 'bold' }}>404 page</p>
      <p>this page does not exciste</p>
      <Redirect from="*" to="/home" />
    </div>
  );
}

export default NotFoundScreen;
