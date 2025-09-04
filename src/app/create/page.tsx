import CreatePostForm from "@/components/blog/create-post-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FilePlus2 } from "lucide-react";

export default function CreatePostPage() {
    return (
        <div className="container max-w-3xl mx-auto py-12 px-4">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-3xl flex items-center gap-2">
                        <FilePlus2 className="h-6 w-6"/>
                        Create New Post
                    </CardTitle>
                    <CardDescription>
                        Fill out the form below to add a new blog post. The post will not be saved as there is no backend.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <CreatePostForm />
                </CardContent>
            </Card>
        </div>
    )
}
