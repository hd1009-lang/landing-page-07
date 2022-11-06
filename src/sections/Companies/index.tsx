import OpenZeppelinLogo from '../../assign/companies/openzeppelin.png';
import OracleLogo from '../../assign/companies/oracle.png';
import MorpheusLogo from '../../assign/companies/morpheus.png';
import SamsungLogo from '../../assign/companies/samsung.png';
import MondayLogo from '../../assign/companies/moday.png';
import SegmentLogo from '../../assign/companies/segment.png';

interface InfoCompany {
  logo: string;
  name: string;
}
const Companies: InfoCompany[] = [
  {
    logo: OpenZeppelinLogo,
    name: 'Open Zeppelin',
  },
  {
    logo: OracleLogo,
    name: 'Oracle',
  },
  {
    logo: MorpheusLogo,
    name: 'Morpheus',
  },
  {
    logo: SamsungLogo,
    name: 'SamSung',
  },
  {
    logo: MondayLogo,
    name: 'Monday.com',
  },
  {
    logo: SegmentLogo,
    name: 'Segment',
  },
];
const RelatedCompanies = () => {
  return (
    <section className="related-companies">
      <h4 className="related-companies-overview">
        Over 32k+ software businesses growing with AR Shakir
      </h4>
      <ul className="related-companies-list">
        {Companies.map((item, index) => {
          return (
            <li className="item-company" key={index}>
              <img src={item.logo} alt={item.name + ' logo'} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default RelatedCompanies;
