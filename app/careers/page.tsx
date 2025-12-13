import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/Button"
import { Briefcase, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/Card"

export const metadata = {
  title: "Careers - NextzenSoftware",
  description: "Join the Nextzen team. We are hiring talented engineers, designers, and problem solvers.",
}

const jobs = [
  {
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "We are looking for an experienced engineer to lead our core product development. You should be proficient in Next.js, Node.js, and cloud architecture.",
  },
  {
    title: "DevOps Specialist",
    department: "Infrastructure",
    location: "Remote",
    type: "Contract",
    description: "Help us build robust CI/CD pipelines and manage our AWS infrastructure. Experience with Kubernetes and Terraform is a must.",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Create beautiful, intuitive interfaces for our enterprise clients. You will work closely with the product team to define user journeys.",
  },
]

export default function CareersPage() {
  return (
    <>
      <Section className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Build the future of technology with us. We offer competitive salaries, remote work, and a culture of innovation.
          </p>
          <Button size="lg" asChild>
            <Link href="#positions">View Openings</Link>
          </Button>
        </div>
      </Section>

      <Section id="positions">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-slate-50">Open Positions</h2>
          {jobs.map((job, index) => (
            <Card key={index} className="hover:border-primary-500 transition-colors border-slate-200 dark:border-slate-800">
              <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Briefcase size={16} /> {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={16} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={16} /> {job.type}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
                    {job.description}
                  </p>
                </div>
                <Button variant="outline" className="shrink-0" asChild>
                  <Link href="/contact">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
