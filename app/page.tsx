import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <main className="container flex flex-col items-center gap-8 py-16 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Fitness Workout Tracker
          </h1>
          <p className="mx-auto max-w-[42rem] text-lg text-muted-foreground sm:text-xl">
            Track your workouts, monitor your progress, and achieve your fitness goals with ease.
          </p>
        </div>
        
        <div className="flex gap-4">
          <Link href="/auth/login">
            <Button size="lg">Login</Button>
          </Link>
          <Link href="/auth/register">
            <Button size="lg" variant="outline">Sign Up</Button>
          </Link>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="text-xl font-bold">Track Workouts</h3>
            <p className="mt-2 text-muted-foreground">Log your exercises, sets, and reps efficiently.</p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="text-xl font-bold">Monitor Progress</h3>
            <p className="mt-2 text-muted-foreground">Visualize your gains with charts and stats.</p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="text-xl font-bold">Nutrition</h3>
            <p className="mt-2 text-muted-foreground">Keep track of your calories and macros.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
