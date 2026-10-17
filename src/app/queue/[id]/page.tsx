import Dashboard from '../../../components/dashboard'
export default async function VideoDetailPage({ params }: { params: Promise<{ id: string }> }) { await params; return <Dashboard section="Video detail" /> }
