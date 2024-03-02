import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Loading } from 'src/components/Loading';
import { PATH } from 'src/constants/paths';
import { MainLayout } from 'src/pages/layouts/MainLayout';

const HomePage = lazy(() => import('src/pages/HomePage'));
const MyBooksPage = lazy(() => import('src/pages/MyBooks'));

export const Routes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<Loading />}>
          <Switch>
            {/* Static pages routes */}
            <Route exact path={PATH.HOME} component={HomePage} />
            <Route exact path={PATH.MYBOOKS} component={MyBooksPage} />
            {/* <Route exact path={PATH.ABOUT} component={AboutPage} />
          <Route exact path={PATH.DEMO1} component={Demo1Page} />
          <Route exact path={PATH.DEMO2} component={Demo2Page} />
          <Route exact path={PATH.FEATURE1} component={Feature1Page} />
          <Route exact path={PATH.FEATURE2} component={Feature2Page} />
          <Route exact path={PATH.CONTACT} component={ContactPage} /> */}
          </Switch>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
};
