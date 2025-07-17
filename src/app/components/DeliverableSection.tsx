import { ViewColumnsIcon } from "@heroicons/react/24/solid";
import { WindowIcon } from "@heroicons/react/24/solid";
import { GiftIcon } from "@heroicons/react/24/solid";
import {
  GlobeAltIcon,
  PresentationChartLineIcon,
  PresentationChartBarIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  DocumentCheckIcon,
  ShieldCheckIcon,
  ClipboardDocumentListIcon,
  DocumentMagnifyingGlassIcon,
  DocumentChartBarIcon,
  BeakerIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  TrophyIcon,
  NewspaperIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/solid";

const deliverables = [
  { deliverable: "All website pages reviewed", icon: GlobeAltIcon },
  {
    deliverable: "Complete SEO audit report in simple format",
    icon: PresentationChartLineIcon,
  },
  { deliverable: "Resolution of on-page SEO issues", icon: CheckBadgeIcon },
  { deliverable: "Resolution of off-page SEO issues", icon: CheckCircleIcon },
  {
    deliverable: "Resolution of technical SEO issues",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    deliverable: "Mobile usability audit report (once a month)",
    icon: ClipboardDocumentListIcon,
  },
  {
    deliverable: "Core web vitals audit report (once a month)",
    icon: PresentationChartBarIcon,
  },
  {
    deliverable: "Content quality report (once a month)",
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    deliverable: "Internal linking review (once a month)",
    icon: DocumentChartBarIcon,
  },
  {
    deliverable: "Site architecture review (once a month)",
    icon: ShieldCheckIcon,
  },
  {
    deliverable: "In-depth backlink analysis (once a month)",
    icon: BeakerIcon,
  },
  { deliverable: "Competitor analysis report (once a month)", icon: WindowIcon },
  { deliverable: "HTML and design review (once a month)", icon: DocumentCheckIcon },
  {
    deliverable: "Missed opportunities (up to 100 keywords) (once a month)",
    icon: ViewColumnsIcon,
  },
  {
    deliverable: "Site compression & cache settings review (once a month)",
    icon: WrenchScrewdriverIcon,
  },
  { deliverable: "Free-of-cost resolution of recurring issues", icon: GiftIcon },
  { deliverable: "Project management", icon: UserGroupIcon },
  { deliverable: "Real-time progress tracking updates", icon: NewspaperIcon },
  {
    deliverable: "Post-audit support and 24/7 website monitoring",
    icon: MagnifyingGlassCircleIcon,
  },
  { deliverable: "Custom SEO growth recommendations", icon: TrophyIcon },
];

export default function DeliverableSection() {
  return (
    <div
      className="relative bg-white px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            20 deliverables for one simple price
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            All the following deliverables are included in even the most basic plan
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
            {deliverables.map((deliverable) => (
              <div key={deliverable.deliverable} className="relative pl-14">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <deliverable.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                </dt>
                <dd className="text-base leading-7 text-gray-600">
                  {deliverable.deliverable}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
