import {Link} from 'react-router';
import React from 'react';

import IconArrow from '../components/icons/IconArrow';
import IconDCOS from '../components/icons/IconDCOS';
import InstallerStore from '../stores/InstallerStore';
import InstallationStages from '../constants/InstallationStages';
import Page from '../components/Page';
import PageContent from '../components/PageContent';
import PageFooter from '../components/PageFooter';
import PageSection from '../components/PageSection';
import PluginSDK from 'PluginSDK';
import SectionHeader from '../components/SectionHeader';
import SectionHeaderIcon from '../components/SectionHeaderIcon';
import SectionHeaderPrimary from '../components/SectionHeaderPrimary';
import SectionHeaderSecondary from '../components/SectionHeaderSecondary';
import SectionFooter from '../components/SectionFooter';

let {Hooks} = PluginSDK;

module.exports = class Begin extends React.Component {
  getBodyCopy() {
    return Hooks.applyFilter('introductionBodyCopy', 'Welcome to the DC/OS Installer. You will be guided through the steps necessary to setup and install the DC/OS in your datacenter.');
  }

  getLogo() {
    return Hooks.applyFilter('dcosLogo', <IconDCOS />);
  }

  getNextButton(currentStage) {
    if (InstallationStages.indexOf(currentStage) !== -1) {
      return (
        <div>
          <Link to={`/${currentStage}`} className="button button-large button-rounded button-primary">
            Resume Installation
            <IconArrow />
          </Link>
          <Link to="/setup" className="stage-link button button-link button-inverse">
            or, Begin New Installation
          </Link>
        </div>
      );
    }

    return (
      <Link to="/setup" className="button button-large button-rounded button-primary">
        Begin Installation
        <IconArrow />
      </Link>
    );
  }

  getPrimaryHeaderCopy() {
    return Hooks.applyFilter('introductionPrimaryHeaderCopy', 'Install DC/OS');
  }

  render() {
    let currentStage = InstallerStore.get('currentStage');
    let logo = this.getLogo();

    return (
      <Page inverse={true} size="medium" pageName="begin">
        <PageContent>
          <PageSection>
            <SectionHeader>
              <SectionHeaderIcon>
                {logo}
              </SectionHeaderIcon>
              <SectionHeaderPrimary inverse={true}>
                {this.getPrimaryHeaderCopy()}
              </SectionHeaderPrimary>
              <SectionHeaderSecondary inverse={true}>
                {this.getBodyCopy()}
              </SectionHeaderSecondary>
            </SectionHeader>
            <SectionFooter>
              {this.getNextButton(currentStage)}
            </SectionFooter>
          </PageSection>
        </PageContent>
        <PageFooter />
      </Page>
    );
  }
}
