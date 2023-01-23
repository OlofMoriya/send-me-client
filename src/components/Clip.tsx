export default function({text, date, user}: {text: string, date: Date, user: string}) {
    return (
        <div class="flex flex-col max-w-xxl bg-slate-700 m-8 p-2 rounded">
            <div class="text-md p-8 text-slate-100">
                {text}
            </div>
            <div class="flex flex-row justify-between">
                <div class="text-sm text-slate-500">
                    {date.toString()}
                </div>
                <div class="text-sm text-slate-500">
                    {user}
                </div>
            </div>
        </div>
    );
}
