import { Routes } from '@angular/router';

import { AccountCardDemoComponent } from './components/account-card-demo/account-card-demo.component';
import { AvatarDemoComponent } from './components/avatar-demo/avatar-demo.component';
import { BannerDemoComponent } from './components/banner-demo/banner-demo.component';
import { BreadcrumbDemoComponent } from './components/breadcrumb-demo/breadcrumb-demo.component';
import { EntityMenuDemoComponent } from './components/entity-menu-demo/entity-menu-demo.component';
import { ExpandableTableDemoComponent } from './components/expandable-table-demo/expandable-table-demo.component';
import { FilterPanelDemoComponent } from './components/filter-panel-demo/filter-panel-demo.component';
import { FoundationsDemoComponent } from './components/foundations-demo/foundations-demo.component';
import { PopoverDemoComponent } from './components/popover-demo/popover-demo.component';
import { SearchInputDemoComponent } from './components/search-input-demo/search-input-demo.component';
import { SkeletonDemoComponent } from './components/skeleton-demo/skeleton-demo.component';
import { UiElementsDemoComponent } from './components/ui-elements-demo/ui-elements-demo.component';
import { UserProfileMenuDemoComponentComponent } from './components/user-profile-menu-demo/user-profile-menu-demo-component.component';

export const nestedRoutes: { title: string; routes: Routes }[] = [
  {
    title: 'Theme',
    routes: [
      { path: 'foundations', component: FoundationsDemoComponent, data: { title: 'Foundations' } },
      { path: 'ui-elements', component: UiElementsDemoComponent, data: { title: 'UI Elements' } }
      // { path: 'theme-builder', component: ThemeBuilderComponent, data: { title: 'Theme Builder' } }
    ]
  },
  {
    title: 'Components',
    routes: [
      //     { path: 'chart', component: ChartDemoComponent, data: { title: 'Chart' } },
      { path: 'filter-panel', component: FilterPanelDemoComponent, data: { title: 'Filter' } },
      //     { path: 'global-search', component: GlobalSearchDemoComponent, data: { title: 'Global Search' } },
      { path: 'popover', component: PopoverDemoComponent, data: { title: 'Popover' } },
      //     { path: 'table', component: TableDemoComponent, data: { title: 'Table' } },
      //     { path: 'repeater', component: RepeaterDemoComponent, data: { title: 'Repeater' } },
      { path: 'skeleton', component: SkeletonDemoComponent, data: { title: 'Skeleton' } },
      //     { path: 'vector-map', component: VectorMapDemoComponent, data: { title: 'Vector Map' } },
      //     { path: 'wizard', component: WizardDemoComponent, data: { title: 'Wizard' } },
      { path: 'entity-menu', component: EntityMenuDemoComponent, data: { title: 'Entity Menu' } },
      //     { path: 'global-nav', component: GlobalNavDemoComponent, data: { title: 'Global Nav' } },
      { path: 'avatar', component: AvatarDemoComponent, data: { title: 'Avatar' } },
      { path: 'expandable-table', component: ExpandableTableDemoComponent, data: { title: 'Expandable Table' } },
      {
        path: 'user-profile-menu',
        component: UserProfileMenuDemoComponentComponent,
        data: { title: 'User Profile Menu' }
      },
      { path: 'banner', component: BannerDemoComponent, data: { title: 'Banner' } },
      { path: 'account-card', component: AccountCardDemoComponent, data: { title: 'Account Card' } },
      { path: 'search-input', component: SearchInputDemoComponent, data: { title: 'Search Input' } },
      //     { path: 'changelog', component: ChangelogDemoComponent, data: { title: 'Changelog' } },
      { path: 'breadcrumb', component: BreadcrumbDemoComponent, data: { title: 'Breadcrumb' } }
      //     { path: 'toaster', component: ToasterDemoComponent, data: { title: 'Toaster' } },
      //     { path: 'video-thumbnail', component: VideoThumbnailDemoComponent, data: { title: 'Video Thumbnail' } },
      //     { path: 'status-stepper', component: StatusStepsDemoComponent, data: { title: 'Status Stepper' } }
    ]
  }
].map((groups) => {
  groups.routes = groups.routes.sort((a: any, b: any) => a.data.title.localeCompare(b.data.title));
  return groups;
});
