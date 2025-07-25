export class Parts{

    init() {
        this.Select();
        this.MasterCrads();
    }
    Select(){
        $(document).ready(function () {
            $(".js-select2").select2({
                closeOnSelect: true,
                minimumResultsForSearch: Infinity,
                allowClear: false,
                dropdownCssClass: "categories-select2",
            });
        })
    }

    MasterCrads(){
        $('.white-plus').hover(
            function () {
                $(this).closest('.master-slider-card').addClass('white-plus-hover');
                $(this).closest('.left-right-slider-card').addClass('white-plus-hover');
            },
            function () {
                $(this).closest('.master-slider-card').removeClass('white-plus-hover');
                $(this).closest('.left-right-slider-card').removeClass('white-plus-hover');
            }
        );
    }
}
