export default function Page({ params }) {
    return (
        <div className="md:container xs:mx-2">
            <h1>{params.slug}</h1>
        </div>
    );
}
